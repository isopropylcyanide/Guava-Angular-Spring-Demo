package org.guava.demo.model;

import org.guava.demo.enums.ScenarioEnum;

import lombok.Data;

/**
 * The Class RunScenario. Models a usecase
 */
@Data
public class RunScenario {
	private ScenarioEnum scenario;
	private String input;
}