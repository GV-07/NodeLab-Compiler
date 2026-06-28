import { TutorialTopic } from './cssTutorialsData';

export const XML_TOPICS: TutorialTopic[] = [
  {
    id: 'xml-home',
    title: 'XML HOME',
    description: 'Welcome to XML! XML stands for eXtensible Markup Language and is designed to store and transport data.',
    explanation: [
      'XML is a software- and hardware-independent tool for storing and transmitting data.',
      'XML does not DO anything on its own; it is just pure information wrapped in tags.',
      'Unlike HTML, XML tags are extensible and are defined by the author.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`,
    languageId: 'xml'
  },
  {
    id: 'xml-intro',
    title: 'XML Intro',
    description: 'Learn the differences between XML and HTML, and why XML is widely used for structuring data.',
    explanation: [
      'XML was designed to carry data - with focus on what data is.',
      'HTML was designed to display data - with focus on how data looks.',
      'XML tags are not predefined like HTML tags (e.g., <table>, <p>). You must define your own tags.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
</bookstore>`,
    languageId: 'xml'
  },
  {
    id: 'xml-how-to-use',
    title: 'XML How to use',
    description: 'See how XML is used as an exchange format between different, incompatible applications.',
    explanation: [
      'XML simplifies data sharing, data transport, platform changes, and data availability.',
      'By carrying data in plain text, XML provides a software- and hardware-independent way of storing data.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<message>
  <sender>system-agent</sender>
  <recipient>developer</recipient>
  <content>XML exchange format confirmed.</content>
</message>`,
    languageId: 'xml'
  },
  {
    id: 'xml-tree',
    title: 'XML Tree',
    description: 'Understand the hierarchical structure of an XML document.',
    explanation: [
      'XML documents must contain one root element that is the parent of all other elements.',
      'All elements can have sub-elements (child elements).',
      'The terms parent, child, and sibling are used to describe relationships between elements.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<root>
  <child>
    <subchild>First node</subchild>
    <subchild>Second node</subchild>
  </child>
</root>`,
    languageId: 'xml'
  },
  {
    id: 'xml-syntax',
    title: 'XML Syntax',
    description: 'Master the strict syntax rules of XML documents.',
    explanation: [
      'All XML elements MUST have a closing tag.',
      'XML tags are case sensitive: <Letter> is different from <letter>.',
      'XML elements must be properly nested.',
      'XML attribute values must always be quoted.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<correct_nesting>
  <b>This text is <i>bold and italic</i></b>
</correct_nesting>`,
    languageId: 'xml'
  },
  {
    id: 'xml-elements',
    title: 'XML Elements',
    description: 'Explore XML elements, their naming rules, and contents.',
    explanation: [
      'An XML element is everything from the element\'s start tag to the element\'s end tag.',
      'Elements can contain text, attributes, other elements, or a mix of all.',
      'Element names can contain letters, numbers, and other characters, but cannot start with a number or punctuation.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<employee id="101">
  <firstname>John</firstname>
  <lastname>Doe</lastname>
</employee>`,
    languageId: 'xml'
  },
  {
    id: 'xml-attributes',
    title: 'XML Attributes',
    description: 'Learn how attributes provide additional information about elements.',
    explanation: [
      'XML attributes must be designed with quoted values.',
      'Attributes are often used to provide metadata that is not part of the actual data.',
      'General rule: Use elements for data, and attributes for metadata.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<file type="image" size="1024">
  <name>avatar.png</name>
</file>`,
    languageId: 'xml'
  },
  {
    id: 'xml-namespaces',
    title: 'XML Namespaces',
    description: 'Avoid element name conflicts using XML namespaces.',
    explanation: [
      'XML namespaces provide a method to avoid element name conflicts.',
      'When using prefixes in XML, a namespace for the prefix must be defined.',
      'The namespace is defined by the xmlns attribute in the start tag of an element.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:h="http://www.w3.org/TR/html4/"
      xmlns:f="https://www.w3schools.com/furniture">
  <h:table>
    <h:tr>
      <h:td>Apples</h:td>
    </h:tr>
  </h:table>
  <f:table>
    <f:name>Coffee Table</f:name>
  </f:table>
</root>`,
    languageId: 'xml'
  },
  {
    id: 'xml-display',
    title: 'XML Display',
    description: 'Learn how XML can be displayed using CSS or XSLT stylesheets.',
    explanation: [
      'XML is for data storage and transport, not layout. However, styled output is possible.',
      'XSLT (eXtensible Stylesheet Language Transformations) is the preferred way to format XML to HTML.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="cd_style.css"?>
<catalog>
  <title>My CD Collection</title>
</catalog>`,
    languageId: 'xml'
  },
  {
    id: 'xml-httprequest',
    title: 'XML HttpRequest',
    description: 'Request XML files dynamically from a web server in standard client-side code.',
    explanation: [
      'The XMLHttpRequest object can be used to request data from a web server dynamically.',
      'Parsed XML can be traversed and updated using standard Javascript DOM operations.'
    ],
    code: `<!DOCTYPE html>
<html>
<body>
  <div id="demo">XML HttpRequest Sandbox</div>
  <script>
    // Example conceptual representation
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString("<msg>Loaded!</msg>", "text/xml");
    document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("msg")[0].childNodes[0].nodeValue;
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'xml-parser',
    title: 'XML Parser',
    description: 'Learn how browser DOMParsers convert XML strings into live document objects.',
    explanation: [
      'All modern browsers have a built-in XML parser.',
      'An XML parser converts an XML string into an XML DOM document.'
    ],
    code: `<!DOCTYPE html>
<html>
<body>
  <div id="demo"></div>
  <script>
    const text = "<book><title>XML Basics</title></book>";
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    document.getElementById("demo").innerText = xmlDoc.getElementsByTagName("title")[0].textContent;
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'xml-dom',
    title: 'XML DOM',
    description: 'Control XML elements, attributes, and texts using standard DOM methods.',
    explanation: [
      'The XML DOM (Document Object Model) defines a standard way for accessing and manipulating XML documents.',
      'It represents XML as a hierarchical tree of nodes.'
    ],
    code: `<!DOCTYPE html>
<html>
<body>
  <div id="output"></div>
  <script>
    const xmlStr = "<items><item>Widget A</item></items>";
    const xmlDoc = new DOMParser().parseFromString(xmlStr, "text/xml");
    const itemText = xmlDoc.getElementsByTagName("item")[0].textContent;
    document.getElementById("output").innerHTML = "DOM Item: <b>" + itemText + "</b>";
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'xml-xpath',
    title: 'XML XPath',
    description: 'Query, target, and filter XML nodes using XPath syntax selectors.',
    explanation: [
      'XPath stands for XML Path Language.',
      'It uses "path-like" expressions to select nodes or node-sets in an XML document.',
      'Contains over 200 built-in functions for string, numeric, and date calculations.'
    ],
    code: `-- XPath Expressions Syntax Example
-- /bookstore/book[1]  Selects the first book child of the bookstore element
-- /bookstore/book[price>35.00] Selects book elements having price greater than 35
`,
    languageId: 'xml'
  },
  {
    id: 'xml-xslt',
    title: 'XML XSLT',
    description: 'Transform raw XML documents into standard interactive HTML structures.',
    explanation: [
      'XSLT (eXtensible Stylesheet Language Transformations) is used to transform XML documents into HTML or other XML documents.',
      'Uses XPath to navigate through elements in the source tree.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>My CD Catalog</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Title</th>
        <th>Artist</th>
      </tr>
      <xsl:for-each select="catalog/cd">
      <tr>
        <td><xsl:value-of select="title"/></td>
        <td><xsl:value-of select="artist"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>`,
    languageId: 'xml'
  },
  {
    id: 'xml-xquery',
    title: 'XML XQuery',
    description: 'Query XML databases using the standard functional XML query syntax.',
    explanation: [
      'XQuery is to XML what SQL is to databases.',
      'It is built on XPath expressions and is highly supported by all major XML databases.'
    ],
    code: `(: XQuery FLWOR Expression Example :)
for $x in doc("books.xml")/bookstore/book
where $x/price > 30
order by $x/title
return $x/title`,
    languageId: 'xml'
  },
  {
    id: 'xml-dtd',
    title: 'XML DTD',
    description: 'Define and enforce legal structures of XML nodes using a Document Type Definition.',
    explanation: [
      'A DTD defines the structure and the legal elements and attributes of an XML document.',
      'DTD can be declared inline in an XML document, or as an external reference.'
    ],
    code: `<!DOCTYPE note [
  <!ELEMENT note (to,from,heading,body)>
  <!ELEMENT to (#PCDATA)>
  <!ELEMENT from (#PCDATA)>
  <!ELEMENT heading (#PCDATA)>
  <!ELEMENT body (#PCDATA)>
]>`,
    languageId: 'xml'
  },
  {
    id: 'xml-schema',
    title: 'XML Schema',
    description: 'Establish enterprise-grade, typed schemas using XML Schema (XSD).',
    explanation: [
      'XML Schema is an XML-based alternative to DTD.',
      'An XML Schema describes the structure of an XML document in typed fields (e.g., integer, string, boolean).',
      'It supports namespaces and rich range limitations.'
    ],
    code: `<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="note">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="to" type="xs:string"/>
        <xs:element name="from" type="xs:string"/>
        <xs:element name="heading" type="xs:string"/>
        <xs:element name="body" type="xs:string"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`,
    languageId: 'xml'
  },
  {
    id: 'xml-services',
    title: 'XML Services',
    description: 'Explore SOAP and REST web services utilizing XML payloads.',
    explanation: [
      'XML is the foundation of SOAP (Simple Object Access Protocol) messages.',
      'Web services use WSDL (Web Services Description Language) schemas written in XML to describe endpoint parameters.'
    ],
    code: `<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/">
  <soap:Header/>
  <soap:Body>
    <GetPrice xmlns="https://www.w3schools.com/prices">
      <ItemName>Laptop</ItemName>
    </GetPrice>
  </soap:Body>
</soap:Envelope>`,
    languageId: 'xml'
  },
  {
    id: 'xml-validation',
    title: 'XML Validation',
    description: 'Verify if XML files are well-formed and valid against structural rules.',
    explanation: [
      'A "Well Formed" XML document has correct syntax (tags closed, quoted attribute values, correct case).',
      'A "Valid" XML document is well-formed AND conforms to DTD or XSD schemas.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Well-formed and schema-complying XML document -->
<status_ok>
  <code_status>200</code_status>
  <description>Document parsed with zero errors.</description>
</status_ok>`,
    languageId: 'xml'
  },
  {
    id: 'xml-validator',
    title: 'XML Validator',
    description: 'Validate custom XML strings directly in browser validator pipelines.',
    explanation: [
      'Errors in XML halt parsing immediately. This is different from HTML, which tries to recover from errors.',
      'Use the browser\'s parser error reports to pinpoint unclosed tag lines.'
    ],
    code: `<!DOCTYPE html>
<html>
<body>
  <div id="result">Checking unclosed tag error...</div>
  <script>
    const faultyXml = "<note><to>Alice</note>"; // missing close to tag
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(faultyXml, "text/xml");
    const errorNode = xmlDoc.getElementsByTagName("parsererror");
    if (errorNode.length > 0) {
      document.getElementById("result").innerHTML = "<b>Validation Error:</b> " + errorNode[0].textContent;
    } else {
      document.getElementById("result").innerHTML = "XML parses successfully.";
    }
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'xml-cd-catalog',
    title: 'XML CD Catalog',
    description: 'Analyze an illustrative CD collection catalog in structured XML.',
    explanation: [
      'The CD Catalog dataset is a classic example for demonstrating XML transformations and parsing.',
      'Elements hold CD metadata: Title, Artist, Country, Company, Price, and Year.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<CATALOG>
  <CD>
    <TITLE>Empire Burlesque</TITLE>
    <ARTIST>Bob Dylan</ARTIST>
    <COUNTRY>USA</COUNTRY>
    <COMPANY>Columbia</COMPANY>
    <PRICE>10.90</PRICE>
    <YEAR>1985</YEAR>
  </CD>
  <CD>
    <TITLE>Hide your heart</TITLE>
    <ARTIST>Bonnie Tyler</ARTIST>
    <COUNTRY>UK</COUNTRY>
    <COMPANY>CBS Records</COMPANY>
    <PRICE>9.90</PRICE>
    <YEAR>1988</YEAR>
  </CD>
</CATALOG>`,
    languageId: 'xml'
  },
  {
    id: 'xml-plant-catalog',
    title: 'XML Plant Catalog',
    description: 'Structure custom greenhouse catalogs using descriptive, nested tags.',
    explanation: [
      'The Plant Catalog holds plant details: Common Name, Botanical Name, Zone, Light conditions, Price, and Availability.'
    ],
    code: `<?xml version="1.0" encoding="UTF-8"?>
<CATALOG>
  <PLANT>
    <COMMON>Bloodroot</COMMON>
    <BOTANICAL>Sanguinaria canadensis</BOTANICAL>
    <ZONE>4</ZONE>
    <LIGHT>Mostly Shady</LIGHT>
    <PRICE>$2.44</PRICE>
    <AVAILABILITY>031584</AVAILABILITY>
  </PLANT>
</CATALOG>`,
    languageId: 'xml'
  }
];
