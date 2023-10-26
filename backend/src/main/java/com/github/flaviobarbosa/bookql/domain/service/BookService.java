package com.github.flaviobarbosa.bookql.domain.service;

import com.github.flaviobarbosa.bookql.domain.model.Book;
import java.util.List;

public interface BookService {

  List<Book> getAllBooks();
}
