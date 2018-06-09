package org.guava.demo.service;

import java.util.Arrays;

import org.guava.demo.enums.ScenarioEnum;
import org.guava.demo.feature.PreConditions;
import org.guava.demo.model.RunScenario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GuavaDemoService {

	@Autowired
	private PreConditions preConditions;

	public String checkPreCondition(RunScenario runScenario) {
		if (runScenario.getScenario() == ScenarioEnum.JAVA) {
			try {
				return preConditions.checkWithJava(runScenario.getInput());
			} catch (NullPointerException ex) {
				return Arrays.toString(ex.getStackTrace());
			}
		}

		if (runScenario.getScenario() == ScenarioEnum.GUAVA) {
			try {
				return preConditions.checkWithGuava(runScenario.getInput());
			} catch (NullPointerException ex) {
				return Arrays.toString(ex.getStackTrace());
			}
		}

		if (runScenario.getScenario() == ScenarioEnum.BOTH) {
			try {
				return preConditions.checkWithBoth(runScenario.getInput());
			} catch (NullPointerException ex) {
				return Arrays.toString(ex.getStackTrace());
			}
		} else {
			return null;
		}
	}
}
