package org.guava.demo.feature;

import static com.google.common.base.Preconditions.checkNotNull;

import org.springframework.stereotype.Component;

@Component
public class PreConditions implements IGuavaDemoFeature {

	@Override
	public String checkWithJava(String input) {
		return input;
	}

	@Override
	public String checkWithGuava(String input) {
		checkNotNull(input);
		return input;
	}

	@Override
	public String checkWithJavaSafe(String input) {
		if (null != input) {
			return input;
		}
		throw new NullPointerException();
	}

	@Override
	public String checkWithBoth(String input) {
		String outputJavaSafe = checkWithJavaSafe(input);
		String outputGuava = checkWithGuava(input);
		assert outputJavaSafe == outputGuava;
		return outputJavaSafe;
	}

}
