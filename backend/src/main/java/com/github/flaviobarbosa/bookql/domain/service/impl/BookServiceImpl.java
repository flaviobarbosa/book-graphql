package com.github.flaviobarbosa.bookql.domain.service.impl;

import com.github.flaviobarbosa.bookql.domain.BookRepository;
import com.github.flaviobarbosa.bookql.domain.model.Book;
import com.github.flaviobarbosa.bookql.domain.service.BookService;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@AllArgsConstructor
public class BookServiceImpl implements BookService {

  BookRepository bookRepository;

  @Override
  public List<Book> getAllBooks() {
    return bookRepository.findAll();
  }
}
