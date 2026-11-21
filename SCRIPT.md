# ICS3U Summative Website – Recorded Presentation Script

## 1. Introduction
[Start recording with your browser open on the website's Home page. Make sure the page is at the top and the website is displayed in Light Mode.]

"Hello, this is Ka Lun. Today, I will be presenting my website about Edge Computing.

I created this website using HTML, CSS, and JavaScript. It contains five pages: Home, How It Works, Applications, Knowledge Check, and Sources.

The purpose of this website is to explain what edge computing is, how it works, where it is used, and some of its advantages and challenges.

Throughout this presentation, I will demonstrate the website's features and explain some of the programming techniques I used to create it."

## 2. Home Page
[Show the Home page. Point to the main heading and introduction.]

"This is the Home page. It introduces the topic of edge computing.

Edge computing is a computing approach where data is processed closer to where it is created, instead of sending everything to a distant cloud server. This can reduce delays and allow devices to respond more quickly.

The page uses headings, paragraphs, images, and links to organize the information.

[Scroll down to show the information cards and other homepage content.]

The content is arranged using CSS Grid and reusable styling classes. This helps keep the layout organized and consistent.

At the top of the page, the navigation menu allows visitors to move between the different sections of the website. The current page is also highlighted so users know where they are."

## 3. How It Works Page
[Click "How It Works" in the navigation menu.]

"This page explains the process behind edge computing.

[Scroll to the numbered steps and diagram.]

The basic process begins when devices such as sensors, cameras, or other connected equipment collect data. That information is sent to a nearby edge device for processing. Some of the processed information can then be sent to the cloud for storage or further analysis.

The page uses an ordered list to explain the process step by step. It also includes a diagram and a comparison table to help explain the differences between edge computing and cloud computing.

[Scroll to the video section. Click the video button and show that the video loads.]

I also included an embedded video from IBM Technology. The video does not load until the user clicks the button. This makes the page more interactive and avoids loading the video immediately when the page opens.

[Scroll to the comparison table and briefly point out its information.]

The table provides another way to compare the two approaches, including their differences in processing location, speed, and other characteristics."

## 4. Applications Page
[Click "Applications" in the navigation menu.]

"This page gives three examples of where edge computing can be used.

[Scroll through each application and point to its image and description.]

The first example is connected vehicles. Edge computing can help vehicles process information from sensors and cameras quickly, which is important when responding to nearby objects and road conditions.

The second example is smart factories. Machines and sensors can process information locally to monitor equipment and help identify problems.

The third example is monitoring systems, such as health monitoring and smart buildings. Local processing can help these systems respond to changing conditions.

I used HTML article elements to organize the examples and created original SVG illustrations for the three applications.

[Scroll to the section discussing considerations or challenges.]

Although edge computing has advantages, it also introduces considerations such as privacy, security, accuracy, maintenance, and the need for human oversight."

## 5. Knowledge Check Page
[Click "Knowledge Check" in the navigation menu.]

"This page contains a short interactive quiz to test the visitor's understanding of edge computing.

There are three multiple-choice questions covering where edge computing takes place, latency, and how edge computing works together with cloud computing.

[Select the correct answers and submit the quiz.]

When the user submits the form, JavaScript checks the answers and calculates the score. It also displays a message based on the result.

[Click the Reset button.]

The reset button clears the selected answers and removes the previous score message, allowing the user to try again.

[Point to the Canvas diagram beside the quiz.]

I also used HTML Canvas and JavaScript to draw this diagram. It represents devices sending information to an edge computer, which can then communicate with the cloud.

This provides a visual explanation of the process rather than relying only on written information."

## 6. Sources Page
[Click "Sources" in the navigation menu.]

"This page lists the sources I used to research the topic of edge computing.

These include information from IBM, AWS, and Cloudflare, as well as the IBM Technology video used on the How It Works page.

I also included image credits and identified the illustrations that I created myself.

Including sources helps visitors identify where the information came from."

## 7. Shared Website Features
[Return to the Home page. Point to the theme controls in the navigation area.]

"Before looking at the code, I will demonstrate a few features that are available throughout the website.

The theme controls allow users to switch between Light Mode, Dark Mode, and System Mode.

[Click Dark Mode, then Light Mode, and finally System Mode.]

The website also includes a manual Desktop and Mobile layout selection.

[Scroll to the footer and click the layout toggle. Demonstrate the alternate layout, then return to the preferred layout.]

These features make the website more flexible and allow users to choose how they want to view the content.

[Scroll down slightly and demonstrate the Back to Top button.]

The Back to Top button also makes it easier to return to the beginning of a page without manually scrolling all the way up."

# Programming Code Demonstration

## 8. JavaScript – `js/quiz.js`
[Open the GitHub repository in another browser tab. Navigate to the `js` folder and open `quiz.js`. Show the beginning of the file.]

"This is the JavaScript file that controls the interactive knowledge check and draws the diagram on the quiz page.

At the beginning, I created an array called `correctAnswers`. It stores the correct answer for each of the three questions. Using an array makes it easier to organize and compare the answers.

Next, I use `document.querySelector` to find the quiz form and the area where the results will appear. I also use an event listener to detect when the user submits the form.

When the form is submitted, `event.preventDefault()` stops the browser from automatically reloading the page. This allows the JavaScript to check the answers and display the result without leaving the page.

The code first checks whether all three questions have been answered. If one is missing, it displays an alert and stops the scoring process.

[Scroll to and highlight the `for` loop and the score comparison.]

I use a `for` loop to go through each question. The program checks the selected answer against the matching answer in the array. Every correct answer increases the score by one.

After checking all the questions, the program displays a different message depending on the score. The reset event listener also clears the previous score message when the user resets the quiz.

[Scroll to the `drawEdgeDiagram()` function.]

The second part of this file uses HTML Canvas and JavaScript to draw the edge computing diagram.

The `drawEdgeDiagram` function gets the Canvas element and its two-dimensional drawing context. It then uses drawing methods such as `fillRect`, `strokeRect`, and `fillText` to create the three boxes and their labels.

[Scroll down to the `drawArrow()` function.]

I also created a separate function called `drawArrow`. Instead of writing the arrow-drawing instructions repeatedly, I can call this reusable function with different starting and ending coordinates.

This demonstrates the use of JavaScript functions, parameters, arrays, loops, event listeners, and HTML Canvas."

## 9. JavaScript – `js/main.js`
[Open `main.js`. Show the theme selection section near the beginning.]

"This is the shared JavaScript file used by all five pages of the website. It controls features that are available throughout the site.

One example is the theme selection. The user can choose between light, dark, and system themes.

The `applyTheme` function applies the selected theme by changing the `data-theme` attribute on the HTML element. The CSS then uses that attribute to change the appearance of the website.

I use `localStorage` to save the user's theme preference. This means the selection can be remembered when the user moves between pages or returns to the website.

The system option also uses `matchMedia` to check whether the device prefers a light or dark appearance.

[Scroll to the Desktop / Mobile layout selection section.]

Another feature is the manual Desktop and Mobile layout selection.

JavaScript checks the saved layout preference and applies the appropriate layout. If the user has not selected one manually, the website uses its normal responsive CSS.

The selection is also saved in `localStorage`, so it can be restored when the user returns to the website.

[Scroll to the YouTube click-to-load section.]

This section controls the video on the How It Works page. When the user clicks the video button, JavaScript creates an iframe and sets its YouTube video address and other properties. It then inserts the iframe into the video container.

This means the video is loaded only after the user clicks the button, rather than immediately when the page opens.

[Scroll to the Back to Top section.]

Finally, this file also controls the Back to Top button. JavaScript checks how far the user has scrolled. Once the page has been scrolled down far enough, the button becomes visible and usable. Near the top of the page, it is hidden and disabled.

Overall, this file demonstrates how JavaScript can respond to user actions, change page content, remember preferences, and control features shared across multiple pages."

## 10. CSS – `css/style.css`
[Open `css/style.css`. Show the element selectors near the beginning.]

"This is the main CSS stylesheet used by all five pages. I kept the styling in one shared file so the website has a consistent appearance and is easier to maintain.

At the beginning, I use element selectors such as `body`, `h1`, `h2`, and `a` to establish the default appearance of the website. I also use the universal selector to apply `box-sizing: border-box` throughout the page.

I use class selectors to style reusable sections and components, such as the header, footer, cards, buttons, and content areas. I also use ID selectors for specific elements, including the quiz Canvas and Back to Top button.

[Scroll to the `.hero`, `.card-grid`, or `.quiz-layout` CSS rules.]

For the page layouts, I use CSS Grid and Flexbox. For example, CSS Grid is used to arrange the homepage content, cards, application sections, and quiz layout into columns.

Flexbox is used in areas such as the navigation and footer to align items and allow them to wrap when necessary.

I also use pseudo-classes such as `:hover` to change the appearance of links and buttons when the user moves the mouse over them. Transitions make these changes smoother.

[Scroll to the responsive media query.]

To make the website work on different screen sizes, I use a media query at a maximum width of 760 pixels.

At smaller screen sizes, layouts that normally have multiple columns change to a single column. This makes the content easier to read on mobile devices.

I also added CSS rules for the manual Desktop and Mobile layout selection, which work together with the JavaScript in `main.js`.

[Scroll to the `html[data-theme='dark']` rules.]

Finally, this section contains the dark theme styling. The CSS uses attribute selectors to apply different background colours, text colours, borders, and other styles when dark mode is selected.

This allows the same HTML content to display in either light or dark mode without needing separate pages."

## 11. Conclusion
[Return to the website's Home page. Leave the website visible while delivering the conclusion.]

"To conclude, this project allowed me to apply what I learned about HTML, CSS, and JavaScript to create a complete multi-page website.

I learned how to organize information using HTML, style and arrange content using CSS, and add interactive features using JavaScript.

I also applied programming concepts such as arrays, loops, functions, parameters, event listeners, local storage, and Canvas drawing.

In terms of the topic itself, I learned how edge computing works, how it differs from traditional cloud computing, and how it is used in real-world applications.

Overall, the project helped me develop both my web development skills and my understanding of edge computing.

Thank you for watching, and I'll see you in the next one."