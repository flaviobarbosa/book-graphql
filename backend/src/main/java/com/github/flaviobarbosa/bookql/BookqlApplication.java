package com.github.flaviobarbosa.bookql;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookqlApplication.class, args);
	}

}
