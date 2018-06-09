package org.guava.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "org.guava.demo")
public class GuavaDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuavaDemoApplication.class, args);
	}
}
