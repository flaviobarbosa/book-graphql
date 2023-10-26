package com.github.flaviobarbosa.bookql.api.controller;

import com.github.flaviobarbosa.bookql.domain.model.Book;
import com.github.flaviobarbosa.bookql.domain.service.BookService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class BookController {

  BookService bookService;

  @QueryMapping
  public List<Book> books() {
    return bookService.getAllBooks();
  }
}
