import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {

  overlayOpen = signal(false)
  recentSearches = signal<string[]>(["angular", "rxjs", "signals"]);

  constructor() {}

  search(searchTerm: string) {
    //Perform the search
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
}
