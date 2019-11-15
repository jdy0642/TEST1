package com.ship.web.tx;

import java.util.Arrays;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ship.web.pxy.Box;
import com.ship.web.pxy.CrawlingProxy;
import com.ship.web.pxy.PageProxy;
import com.ship.web.pxy.Trunk;

@RestController
@Transactional
@RequestMapping("/tx")
public class TxController {
	@Autowired
	Trunk<Object> trunk;
	@Autowired
	Box<String> box;
	@Autowired
	CrawlingProxy crawler;
	@Autowired
	TxService txService;
	@Autowired
	PageProxy pager;

	@GetMapping("/bugscrawling")
	public Box<String> bringBugs() {
		System.out.println("컨트롤러 들어옴: >>>>>");
		box = txService.crawling(trunk.get());
		return box;
	}

	@GetMapping("/cgvcrawling")
	public Map<?, ?> bringCgv() {
		trunk.put(Arrays.asList("list"), Arrays.asList(txService.cgvCrawling()));
		return trunk.get();
	}
	@GetMapping("/engcrawling")
    public Box<String> bringEng(){
        System.out.println("컨트롤러 들어옴: >>>>>");
        box = txService.engCrawling(trunk.get());
        return box;
    }
}