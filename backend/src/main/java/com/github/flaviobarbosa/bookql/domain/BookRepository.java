package com.github.flaviobarbosa.bookql.domain;

import com.github.flaviobarbosa.bookql.domain.model.Book;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, UUID> {

}
