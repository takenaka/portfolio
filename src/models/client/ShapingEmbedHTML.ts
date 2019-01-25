import Embed from '@/plugins/embed'

export default class {
  private document: Document
  private apiKey: string

  constructor(htmlString: string, apiKey: string) {
    const document = new DOMParser().parseFromString(htmlString, 'text/html')
    this.document = document
    this.apiKey = apiKey
  }

  public getHtml = async () => {
    const targetList = Array.from(
      this.document.querySelectorAll('.embedly-card')
    ).filter(el => el.hasAttribute('href'))
    const urls = targetList.map(el => el.getAttribute('href'))
    if (!urls.length) {
      return false;
    }

    const contents = await new Embed(this.apiKey).getContents(urls)

    targetList.forEach(el => {
      const content = contents.find(
        c => c.original_url === el.getAttribute('href')
      )
      if (!content) return
      el.setAttribute('target', '_blank')
      const defaultImage = content.images[0] || {}
      const isWide = defaultImage && defaultImage.width > defaultImage.height
      el.innerHTML = `
          <div class="card">
            <div class="card__header">
              <img src="${content.favicon_url}" class="card__favicon">
              <a class="card__provider" target="_blank" href="${
                content.provider_url
              }">${content.provider_name}</a>
            </div>
            ${
              content.media.type === 'video'
                ? `
                <div class="card__body">
                  ${content.media.html}
                </div>
              `
                : `
                <div class="card__body ${isWide ? 'is-wide' : null}">
                  <img class="card__thumbnail" src="https://i-cdn.embed.ly/1/display/resize?key=${
                    this.apiKey
                  }&url=${encodeURI(defaultImage.url)}&width=${
                    isWide ? defaultImage.width : 180
                  }">
                  <div class="card__content">
                    <div class="card__title">${content.title}</div>
                    <div class="card__description">${content.description}</div>
                    <a class="card__nav" target="_blank" href="${
                      content.provider_url
                    }">${content.provider_display}</a>
                  </div>
                </div>
              `
            }
          </div>
        `
    })

    const body = this.document.querySelector('body');

    if (!body) {
      return false;
    }

    return body.innerHTML;
  }
}
