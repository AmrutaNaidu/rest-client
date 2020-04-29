import { Component, OnInit } from '@angular/core';
import { DataService, Book } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private dataService: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  book: Book;

  updateBook() {
    this.dataService.saveBook(this.book).subscribe(_ => {
      //Go back to the home page
      this.router.navigate(['/'])
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      let isbn = params['isbn']

      this.dataService.getBook(isbn).subscribe(book => {
        this.book = book
      })
    })
  }

  ngOnDestroy(): void {
    console.log('edit in destroy!');
  }
}
