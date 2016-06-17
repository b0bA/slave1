import urllib
import urllib2
import httplib
import requests

from bs4 import BeautifulSoup
from cookielib import CookieJar

cj = CookieJar()
url = "www.packtpub.com"
login_url = "https://www.packtpub.com/packt/offers/free-learning#"
claim_url = "https://www.packtpub.com"
user_agent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36'
proxy_url = 'proxy.clondiag.jena:8080'
login_email = 'yqnmhdmt@boximail.com'
passwd = 'a12bc34'
form_data = {'email': login_email, 'password': passwd}
data = urllib.urlencode(form_data)
#proxy_support = urllib2.ProxyHandler({'https': proxy_url})

conn = httplib.HTTPSConnection(proxy_url)
conn.request('GET', "/")
r1 = conn.getresponse()
print r1.



























    status, r1.reason, r1.read()



"""
opener = urllib2.build_opener(proxy_support, urllib2.HTTPHandler, urllib2.HTTPCookieProcessor(cj))
opener.addheaders = [('User-Agent', user_agent)]
urllib2.install_opener(opener)
req = urllib2.Request(login_url)
#req.add_header('User-Agent', user_agent)
resp = urllib2.urlopen(req, data)
resp_data = resp.read()
print cj
#print resp_data

soup = BeautifulSoup(resp_data, 'html.parser')
print soup.h2.string.strip()
for link in soup.find_all('a', class_='twelve-days-claim'):
    claim_url += link.get('href')

print claim_url

resp.close()

req = urllib2.Request(claim_url)
#req.add_header('User-Agent', user_agent)
resp = urllib2.urlopen(req)
resp_data = resp.read()

print resp_data

resp.close()
"""

