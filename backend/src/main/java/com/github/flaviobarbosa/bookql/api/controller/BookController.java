package com.github.flaviobarbosa.bookql.api.controller;

import com.github.flaviobarbosa.bookql.api.model.BookInput;
import com.github.flaviobarbosa.bookql.api.model.BookOutput;
import com.github.flaviobarbosa.bookql.domain.model.Book;
import com.github.flaviobarbosa.bookql.domain.service.BookService;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class BookController {

  BookService bookService;
  ModelMapper mapper;

  @QueryMapping
  public List<BookOutput> books() {
    return bookService.getAllBooks()
        .stream()
        .map(book -> mapper.map(book, BookOutput.class))
        .collect(Collectors.toList());
  }

  @QueryMapping
  public BookOutput bookById(@Argument UUID id) {
    Book book = bookService.getById(id);
    return mapper.map(book, BookOutput.class);
  }

  @MutationMapping
  public BookOutput addBook(@Argument(name = "book") BookInput bookInput) {
    Book book = mapper.map(bookInput, Book.class);
    book = bookService.save(book);
    return mapper.map(book, BookOutput.class);
  }

  @MutationMapping
  public BookOutput updateBook(@Argument UUID id, @Argument(name = "book") BookInput bookInput) {
    Book updatedBook = mapper.map(bookInput, Book.class);
    Book book = bookService.update(id, updatedBook);
    return mapper.map(book, BookOutput.class);
  }

  @MutationMapping
  public Boolean deleteById(@Argument UUID id) {
    return bookService.deleteById(id);
  }
}
