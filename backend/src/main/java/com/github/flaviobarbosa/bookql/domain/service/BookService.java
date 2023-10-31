package com.github.flaviobarbosa.bookql.domain.service;

import com.github.flaviobarbosa.bookql.domain.model.Book;
import java.util.List;
import java.util.UUID;

public interface BookService {

  List<Book> getAllBooks();

  Book getById(UUID id);

  Book save(Book book);

  Book update(UUID id, Book updatedBook);

  Boolean deleteById(UUID id);
}
