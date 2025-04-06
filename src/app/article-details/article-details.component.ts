import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  articleId: number | null = null;
  article: any;

  // Example articles data (replace with actual data source)
  articles = [
    { id: 1, title: 'CSK won against GT...!', content: 'Detailed content for Article 1...' },
    { id: 2, title: 'Article 2', content: 'Detailed content for Article 2...' },
    { id: 3, title: 'Article 3', content: 'Detailed content for Article 3...' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the article ID from the route
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));

    // Find the article by ID
    this.article = this.articles.find((a) => a.id === this.articleId);
  }
}