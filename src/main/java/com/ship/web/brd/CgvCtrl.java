package com.ship.web.brd;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ship.web.pxy.PageProxy;
import com.ship.web.pxy.Trunk;
import com.ship.web.pxy.Box;

@RestController
@RequestMapping("/cgv")
public class CgvCtrl {
	private static final Logger logger = LoggerFactory.getLogger(CgvCtrl.class);
	@Autowired CgvMapper cgvMapper;
	@Autowired Box<Cgv> box;
	@Autowired Trunk<Object> trunk;
	@Autowired PageProxy pager;
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Cgv param) {
		logger.info("롸이트");
		Consumer<Cgv> c = t -> cgvMapper.insertCgv(param);
		c.accept(param);
		Supplier<String> s =()-> cgvMapper.countCgv();
		trunk.put(Arrays.asList("msg","count"),
				Arrays.asList("SUCCESS",s.get()));
		return trunk.get();
	}
	@GetMapping("/page/{pageno}/size/{pageSize}")
	public Map<?,?>  list(@PathVariable String pageno,
			@PathVariable String pageSize){
		System.out.println("넘어온 페이지 넘버: "+pageno);
		pager.setPageNum(pager.integer(pageno));
		pager.setPageSize(pager.integer(pageSize));
		pager.paging();
		box.clear();
		Supplier<List<Cgv>> s = () -> cgvMapper.selectList(pager);
		trunk.put(Arrays.asList("cgv", "pxy"), Arrays.asList(s.get(),pager));
		return trunk.get();
	}

	@PutMapping("/{id}")
	public Map<?,?> updateCgv(@PathVariable String id, @RequestBody Cgv param) {
		logger.info("수정"+param);
		Consumer<Cgv> c = t -> cgvMapper.updateCgv(param);
		c.accept(param);
		logger.info("수정2");
		trunk.put(Arrays.asList("msg"), Arrays.asList("SUCCESS"));
		return trunk.get();
	} 
	@DeleteMapping("/{id}")
	public Map<?,?> deleteArticle(@PathVariable String id, @RequestBody Cgv param) {
		logger.info("삭제");
		Consumer<Cgv> c = t -> cgvMapper.deleteCgv(param);
		c.accept(param);
		logger.info("삭제2");
		trunk.put(Arrays.asList("msg"), Arrays.asList("SUCCESS"));
		return trunk.get();
	} 
	@GetMapping("/count")
	public Map<?,?> count() {
		logger.info("카운트");
		Supplier<String> s = () -> cgvMapper.countCgv(); 
		logger.info("카운트2/"+s.get());
		trunk.put(Arrays.asList("count"), Arrays.asList(s.get()));
		return trunk.get();
	}
	/*@PostMapping("/fileupload")
	public void fileupload(MultipartFile[] uploadFile) {
		fileMgr.fileupload(uploadFile);
	}*/
	
	
}
