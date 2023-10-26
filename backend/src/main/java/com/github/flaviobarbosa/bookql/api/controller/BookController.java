package com.github.flaviobarbosa.bookql.api.controller;

import com.github.flaviobarbosa.bookql.api.model.BookDTO;
import com.github.flaviobarbosa.bookql.domain.model.Book;
import com.github.flaviobarbosa.bookql.domain.service.BookService;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class BookController {

  BookService bookService;
  ModelMapper mapper;

  @QueryMapping
  public List<BookDTO> books() {
    return bookService.getAllBooks()
        .stream()
        .map(book -> mapper.map(book, BookDTO.class))
        .collect(Collectors.toList());
  }

  @QueryMapping
  public BookDTO bookById(@Argument UUID id) {
    Book book = bookService.getById(id);
    return mapper.map(book, BookDTO.class);
  }
}
