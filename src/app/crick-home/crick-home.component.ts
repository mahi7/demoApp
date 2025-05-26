import { Component } from '@angular/core';

@Component({
  selector: 'app-crick-home',
  templateUrl: './crick-home.component.html',
  styleUrls: ['./crick-home.component.css']
})
export class CrickHomeComponent {
  searchText: string = '';
  // news = [
  //   {
  //     title: 'Match Highlights',
  //     description: 'India vs Australia: A thrilling match with unexpected twists.',
  //     image: 'https://via.placeholder.com/150',
  //     link: '#'
  //   },
  //   {
  //     title: 'Player Spotlight',
  //     description: 'Virat Kohli\'s incredible century leads India to victory.',
  //     image: 'https://via.placeholder.com/150',
  //     link: '#'
  //   },
  //   {
  //     title: 'Upcoming Tournaments',
  //     description: 'ICC World Cup 2025: Teams to watch out for.',
  //     image: 'https://via.placeholder.com/150',
  //     link: '#'
  //   }
  // ];

  cricketers = [
    { name: 'Virat Kohli', image: 'assets/logos/vk.jpg' },
    { name: 'MS Dhoni', image: 'assets/logos/MSD.jpg' },
    { name: 'Rohit Sharma', image: 'assets/logos/rs.jpg' },
    { name: 'Jasprit Bumrah', image: 'assets/logos/jb.jpg' },
    { name: 'Steve Smith', image: 'assets/logos/ss.jpg' },
    { name: 'Kane Williamson', image: 'assets/logos/kv.jpg' },
    { name: 'Joe Root', image: 'assets/logos/jr.jpg' },
    { name: 'Ben Stokes', image: 'assets/logos/bs.jpg' },
    { name: 'David Warner', image: 'assets/logos/dw.jpg' },
    { name: 'AB de Villiers', image: 'assets/logos/dw.jpg' },
    { name: 'Chris Gayle', image: 'assets/logos/dw.jpg' },
    { name: 'Shakib Al Hasan', image: 'assets/logos/dw.jpg' }
  ];

  news = [
    {
      id: 1,
      title: "Virat Kohli's incredible century leads India to victory",
      description: 'Virat Kohli scored a stunning century to lead India to a thrilling victory.',
      image: 'assets/images/virat-kohli-century.jpg',
      link: '',
    },
    {
      id: 2,
      title: 'Rohit Sharma smashes double century in ODI',
      description: 'Rohit Sharma smashed a double century in a historic ODI match.',
      image: 'assets/images/rohit-sharma-double-century.jpg',
      link: '',
    },
    {
      id: 2,
      title: 'Rohit Sharma smashes double century in ODI',
      description: 'Rohit Sharma smashed a double century in a historic ODI match.',
      image: 'assets/images/rohit-sharma-double-century.jpg',
      link: '',
    },
    {
      id: 2,
      title: 'Rohit Sharma smashes double century in ODI',
      description: 'Rohit Sharma smashed a double century in a historic ODI match.',
      image: 'assets/images/rohit-sharma-double-century.jpg',
      link: '',
    },
    {
      id: 2,
      title: 'Rohit Sharma smashes double century in ODI',
      description: 'Rohit Sharma smashed a double century in a historic ODI match.',
      image: 'assets/images/rohit-sharma-double-century.jpg',
      link: '',
    },
    {
      id: 2,
      title: 'Rohit Sharma smashes double century in ODI',
      description: 'Rohit Sharma smashed a double century in a historic ODI match.',
      image: 'assets/images/rohit-sharma-double-century.jpg',
      link: '',
    }
  ];

  get filteredNews() {
    return this.news.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
