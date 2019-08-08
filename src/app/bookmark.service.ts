import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks = [];

  addBookmark(estate) {
    this.bookmarks.push(estate);
  }

  deleteBookmark(estate) {
    let index :number = this.bookmarks.indexOf(estate);
    this.bookmarks.splice( index, 1 ) ;
  }

  getBookmarks() {
    return this.bookmarks;
  }

  clearBookmarks() {
   this.bookmarks = [];
   return this.bookmarks;
  }

  constructor() { }
}
