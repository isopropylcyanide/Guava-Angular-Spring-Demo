package org.guava.demo.model;

import org.guava.demo.enums.StatusCode;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class ResponseDto {
	private @Getter @Setter StatusCode responseCode;
	private @Getter @Setter Object data;
	private @Getter @Setter Object additionalData;
}