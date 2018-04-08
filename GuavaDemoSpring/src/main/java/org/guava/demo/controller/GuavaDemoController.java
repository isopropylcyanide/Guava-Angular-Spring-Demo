package org.guava.demo.controller;

import static org.guava.demo.enums.StatusCode.SUCCESS;

import org.guava.demo.model.ResponseDto;
import org.guava.demo.model.RunScenario;
import org.guava.demo.service.GuavaDemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/guavademo")
@RestController
public class GuavaDemoController {

	@Autowired
	private GuavaDemoService guavaDemoService;

	@PostMapping("/precondition")
	ResponseDto checkPreCondition(@RequestBody RunScenario runScenario) {
		ResponseDto responseDto = new ResponseDto();
		String outputData = guavaDemoService.checkPreCondition(runScenario);
		responseDto.setData(outputData);
		responseDto.setResponseCode(SUCCESS);
		return responseDto;
	}

}
