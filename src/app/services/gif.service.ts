import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GIFData, Gif } from '../inerfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagsHistory: string[] = [];
  private apiKey: string = environment.apiKey;
  private apiUrl: string = environment.apiUrl;
  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {
    this._tagsHistory = this.getFromStorage('tags');
    if(this._tagsHistory.length > 0) this.searchTag(this._tagsHistory[0]);
   }

  public get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this.tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.setInStorage('tags', this._tagsHistory);
  }

  public searchTag(tag: string): void {
    if(tag.length === 0) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10')
    this.http.get<GIFData>(this.apiUrl, { params })
      .subscribe(response => {
        this.gifList = response.data;
      })
  }

  private getFromStorage(key: string): any[] {
    if(!localStorage.getItem(key)) return [];
    const data = JSON.parse(localStorage.getItem(key)!);
    return data;
  }

  private setInStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

}
