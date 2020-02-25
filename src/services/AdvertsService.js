import api from './api';

export function getBooksToValidate() {
    const promise = new Promise((resolve, reject) => {
        api.get('/books/validate')
            .then(res => {
                if (!res || !res.data) reject('ERROR FETCHING');
                const nextPageUrl = res.data.next_page_url;
                resolve({
                    data: res.data.data,
                    nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null,
                    total: res.data.total,
                });
            })
            .catch(err => reject(err));
    });

    return promise;
}

export function booksToValidatePagination(page) {
    const promise = new Promise((resolve, reject) => {
        api.get(`/books/validate?page=${page}`)
            .then(res => {
                if (!res || !res.data) reject('ERROR FETCHING');
                const nextPageUrl = res.data.next_page_url;
                resolve({
                    data: res.data.data,
                    nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null,
                    total: res.data.total,
                });
            })
            .catch(err => reject(err));
    });

    return promise;
}

export function getAllBooks() {
    const promise = new Promise((resolve, reject) => {
        api.get('/books')
            .then(res => {
                if (!res || !res.data) reject('ERROR FETCHING');
                const nextPageUrl = res.data.next_page_url;
                resolve({
                    data: res.data.data,
                    nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null,
                    total: res.data.total,
                });
            })
            .catch(err => reject(err));
    });

    return promise;
}

export function getAllBooksPagination(page) {
    const promise = new Promise((resolve, reject) => {
        api.get(`/books?page=${page}`)
            .then(res => {
                if (!res || !res.data) reject('ERROR FETCHING');
                const nextPageUrl = res.data.next_page_url;
                resolve({
                    data: res.data.data,
                    nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null,
                    total: res.data.total,
                });
            })
            .catch(err => reject(err));
    });

    return promise;
}

export function getBooksApproved() {
    const promise = new Promise((resolve, reject) => {
        api.get('/books/approved')
            .then(res => {
                if (!res || !res.data) reject('ERROR FETCHING');
                const nextPageUrl = res.data.next_page_url;
                resolve({
                    data: res.data.data,
                    nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null,
                    total: res.data.total,
                });
            })
            .catch(err => reject(err));
    });

    return promise;
}

export function approvedBooksPagination(page) {
    const promise = new Promise((resolve, reject) => {
        api.get(`/books/approved?page=${page}`)
            .then(res => {
                if (!res || !res.data) reject('ERROR FETCHING');
                const nextPageUrl = res.data.next_page_url;
                resolve({
                    data: res.data.data,
                    nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null,
                    total: res.data.total,
                });
            })
            .catch(err => reject(err));
    });

    return promise;
}

export function getBooksRejected() {
    const promise = new Promise((resolve, reject) => {
        api.get('/books/refused')
            .then(res => {
                if (!res || !res.data) reject('ERROR FETCHING');
                const nextPageUrl = res.data.next_page_url;
                resolve({
                    data: res.data.data,
                    nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null,
                    total: res.data.total,
                });
            })
            .catch(err => reject(err));
    });

    return promise;
}

export function refusedBooksPagination(page) {
    const promise = new Promise((resolve, reject) => {
        api.get(`/books/refused?page=${page}`)
            .then(res => {
                if (!res || !res.data) reject('ERROR FETCHING');
                const nextPageUrl = res.data.next_page_url;
                resolve({
                    data: res.data.data,
                    nextPage: nextPageUrl ? nextPageUrl.split('=')[1] : null,
                    total: res.data.total,
                });
            })
            .catch(err => reject(err));
    });

    return promise;
}
