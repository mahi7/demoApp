import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crick-homenewsarticle',
  templateUrl: './crick-homenewsarticle.component.html',
  styleUrls: ['./crick-homenewsarticle.component.css']
})
export class CrickHomenewsarticleComponent implements OnInit{
  articleId: number | null = null;
  article: any;

  // Example articles data (replace with actual data source)
  articles = [
    {
      id: 1,
      title: "Virat Kohli's incredible century leads India to victory",
      content:
        "In a thrilling match against Australia, Virat Kohli scored an incredible century, leading India to a memorable victory. His performance was a masterclass in batting under pressure, showcasing his skill and determination.",
      image: 'assets/images/virat-kohli-century.jpg',
    },
    {
      id: 2,
      title: 'Rohit Sharma smashes double century in ODI',
      content:
        'Rohit Sharma once again proved why he is one of the best ODI players in the world by smashing a double century against Sri Lanka. His innings was filled with breathtaking shots and impeccable timing.',
      image: 'assets/images/rohit-sharma-double-century.jpg',
    },
  ];

  relatedArticles = [
    { id: 1, title: "Rohit Sharma's double century stuns Sri Lanka" },
    { id: 2, title: "India vs Pakistan: A historic clash" },
    { id: 3, title: "Top 10 moments in IPL history" }
  ];

  categories = ['Cricket News', 'IPL', 'T20 World Cup', 'ODI Series', 'Test Matches'];


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the article ID from the route
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));

    // Find the article by ID
    this.article = this.articles.find((a) => a.id === this.articleId);
  }
}
