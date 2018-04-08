package org.guava.demo.service;

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
			} catch (Exception e) {
				return e.getMessage();
			}
		}

		if (runScenario.getScenario() == ScenarioEnum.GUAVA) {
			try {
				return preConditions.checkWithGuava(runScenario.getInput());
			} catch (Exception e) {
				return e.getMessage();
			}
		}

		if (runScenario.getScenario() == ScenarioEnum.BOTH) {
			try {
				return preConditions.checkWithBoth(runScenario.getInput());
			} catch (Exception e) {
				return e.getMessage();
			}
		} else {
			return null;
		}
	}
}
