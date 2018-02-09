export class StorageService<T> {

    getRecent(): Promise<T[]> {
        throw new Error('Not implemented.');
    }

    add(newItem: T): Promise<String> {
        throw new Error('Not implemented.');
    }

    getById(id: String): Promise<T> {
        throw new Error('Not implemented.');
    }
}