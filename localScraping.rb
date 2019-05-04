require 'nokogiri'

# URLに簡単にアクセスできるようにするためのライブラリ
require 'open-uri'
# CSV出力をできるようにするためのライブラリ
require 'csv'

# ローカル検証用
# ファイル名を指定
file = File.open("Yahoo!JAPAN.html")



# 本番用　ローカルでは封印しています
# urls = %w(file:///Users/yo888/Desktop/Yahoo!%20JAPAN.html)
titles = []
# charset = nil
# urls.each do |url|
#   html = open(url) do |f|
#     charset = f.charset
#     f.read
#   end

# ローカル用
  doc = Nokogiri::HTML(file)
  # 本番用
  # doc = Nokogiri::HTML.parse(html, nil, charset)

  doc.xpath('//ul[@class="emphasis"]').each do |node|
    title = node.css('a').inner_text
    titles.push(title)
  end
# end

CSV.open("yahooNews.csv", "w") do |csv|
  csv << titles
end