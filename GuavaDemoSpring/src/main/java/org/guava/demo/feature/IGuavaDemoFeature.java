package org.guava.demo.feature;

/**
 * The Interface GuavaDemoCasesInterface.
 */
public interface IGuavaDemoFeature {

	/**
	 * Check the given input with plain old java .
	 *
	 * @param input
	 *            the input
	 * @return the string
	 */
	public String checkWithJava(String input);

	/**
	 * Check with java safe.
	 *
	 * @param input
	 *            the input
	 * @return the string
	 */
	public String checkWithJavaSafe(String input);

	/**
	 * Check the given input with guava.
	 *
	 * @param input
	 *            the input
	 * @return the string
	 */
	public String checkWithGuava(String input);

	/**
	 * Check the given input with both Java and Guava.
	 *
	 * @param input
	 *            the input
	 * @return the string
	 */
	public String checkWithBoth(String input);

}
