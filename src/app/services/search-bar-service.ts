import {effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {

  overlayOpen = signal(false)
  recentSearches = signal<string[]>(JSON.parse(window.localStorage.getItem('recentSearches') ?? '[]'));

  searchTerm = signal('')

  constructor() {}

  search(searchTerm: string) {
    //Perform the search
    this.searchTerm.set(searchTerm);
    this.overlayOpen.set(false);
    this.addRecentSearches(searchTerm);
  }

  addRecentSearches(searchTerm: string) {
    const lowerCaseTerm = searchTerm.toLowerCase();
    this.recentSearches.set([
      lowerCaseTerm,
      ...this.recentSearches().filter((s) => s !== lowerCaseTerm),
      ]);
  }

  deleteRecentSearches(searchTerm: string) {
    this.recentSearches.set(this.recentSearches().filter((s) => s !== searchTerm));
  }

  saveLocalStorage = effect(() => {
    window.localStorage.setItem(
      'recentSearches',
      JSON.stringify(this.recentSearches())
    );
  });
}
