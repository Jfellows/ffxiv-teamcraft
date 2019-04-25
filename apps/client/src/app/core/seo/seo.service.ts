import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoMetaConfig } from './seo-meta-config';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private config: SeoMetaConfig;

  constructor(private meta: Meta, private title: Title) {
  }

  public setConfig(config: Partial<SeoMetaConfig>): void {
    this.config = {
      ...this.config,
      ...config
    };
    this.applyConfig();
  }

  public resetConfig(): void {
    this.config = {
      title: 'FFXIV Teamcraft',
      description: 'Create crafting lists and collaborate with others, set gathering alarms, simulate crafting rotations, and more...',
      url: 'https://ffxivteamcraft.com/'
    };
    this.applyConfig();
  }

  private applyConfig(): void {
    this.title.setTitle(this.config.title);
    this.meta.updateTag({ name: 'description', content: this.config.description });
    this.meta.updateTag({ name: 'twitter:title', content: this.config.title });
    this.meta.updateTag({ name: 'twitter:description', content: this.config.description });
    this.meta.updateTag({ property: 'og:title', content: this.config.title });
    this.meta.updateTag({ property: 'og:description', content: this.config.description });
    this.meta.updateTag({ property: 'og:url', content: this.config.url });
  }
}