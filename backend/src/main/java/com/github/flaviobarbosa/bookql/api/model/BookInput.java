package com.github.flaviobarbosa.bookql.api.model;

import java.time.LocalDate;
import lombok.Data;

@Data
public class BookInput {

  private String title;
  private String isbn10;
  private String isbn13;
  private Integer pages;
  private String publisher;
  private String author;
  private String subject;
  private LocalDate publishedAt;

}
