import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    params: {
        key: 'AIzaSyDuoggnxnppevRQV2YYwBR0dMkAxRtq_3I'
    }
})


export const booksApi = {
    getBooks(params: ParamsType) {
        return instance.get<ResponseType>('volumes', {params})
    }
}

export type ParamsType = {
    q: string
    orderBy: string
    startIndex?: number
    maxResults? : number

}
export type ResponseType = {
    items: ItemType[]
    kind: string
    totalItems: number
}
export type ItemType = {
    accessInfo: {
        accessViewStatus: string
        country: string
        embeddable: boolean
    }
    epub: { isAvailable: boolean }
    pdf: {
        acsTokenLink: string
        isAvailable: boolean
    }
    publicDomain: boolean
    quoteSharingAllowed: boolean
    textToSpeechPermission: string
    viewability: string
    webReaderLink: string
    etag: string
    id: string
    kind: string
    saleInfo: {
        country: string
        isEbook: boolean
        saleability: string
    }
    searchInfo: {
        textSnippet: string
    }
    selfLink: string
    volumeInfo: {
        allowAnonLogging: boolean
        authors: string[]
        canonicalVolumeLink: string
        categories: string[]
        contentVersion: string
        description: string
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        }
        industryIdentifiers: { type: string, identifier: string }[]
        infoLink: string
        language: string
        maturityRating: string
        pageCount: number
        panelizationSummary: {
            containsEpubBubbles: boolean
            containsImageBubbles: boolean
        }
        previewLink: string
        printType: string
        publishedDate: string
        publisher: string
        readingModes: {
            image: boolean
            text: boolean
        }
        title: string
    }
}
