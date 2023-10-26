package com.github.flaviobarbosa.bookql.domain.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;
import java.util.UUID;
import lombok.Data;

@Entity
@Data
public class Book {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  private String title;

  private String isbn10;

  private String isbn13;

  private Integer pages;

  private String publisher;

  private String author;

  private String subject;

  private LocalDate publishedAt;

}
