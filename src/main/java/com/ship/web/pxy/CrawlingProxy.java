package com.ship.web.pxy;

import java.util.Map;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ship.web.brd.Cgv;
import com.ship.web.enums.Path;
import com.ship.web.tx.TxMapper;

@Component("crawler")
public class CrawlingProxy extends Proxy {
	@Autowired
	Box<String> box;
	@Autowired TxMapper txMapper;

	public Box<String> bugsChoose(Map<?, ?> paramMap) {
        // System.out.println("박스 choose"+box);
        return bugsCrawling("https://music.bugs.co.kr/chart");
    }
    private Box<String> bugsCrawling(String url) {
        box.clear();
        try {
            Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
            Elements rank = rawData.select("div[class=\"ranking\"] strong");
            Elements artist = rawData.select("p[class=\"artist\"] a");
            Elements title = rawData.select("p[class=\"title\"] a");
            for(int i = 0 ; i < rank.size(); i++) {
                box.add(String.format("%s위:  %s   /   %s\n", rank.get(i).text(), artist.get(i).text(), title.get(i).text()));
            }
            
            System.out.println("box에 담긴: " + box);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return box;
    }

	public Box<String> cgvChoose() {
		return cgvCrawling(Path.CRAWLING_CGV.toString() + 3);
	}// dd
	@Transactional
	private Box<String> cgvCrawling(String url) {
		String temp = "";
		box.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements artist = rawData.select("a strong[class=\"title\"]");
			Elements num = rawData.select("div strong[class=\"rank\"]");
			for (int i = 0; i < num.size(); i++) {
				temp = String.format("%s위 : %s\n", num.get(i).text().replace("No.", ""), artist.get(i).text());
				box.add(temp);
				System.out.println(temp);
				txMapper.insertCgv(new Cgv(temp,i));
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return box;
	}

	public Box<String> engChoose(Map<?, ?> paramMap) {

		return engCrawling("https://endic.naver.com/?sLn=kr");
	}

	private Box<String> engCrawling(String url) {
		box.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements artist = rawData.select("div[class=\"txt_origin\"] a");
			for (Element e : artist) {
				box.add(e.text() + "\n");

			}
			System.out.println("box에 담긴: " + box);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return box;
	}
}