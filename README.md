# Gallery 🌄
## Description
The Gallery app where you can easily add and delete images, switch between them, and jump to any image in the gallery using the navigation bar. The project was inspired by [this assignment](https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions#image-slider){:target="_blank"} from [The Odin Project](https://www.theodinproject.com/dashboard){:target="_blank"}. Although it's not one of the regular TOP curriculum projects, I treated it as a standard project. The Odin Project provides a high quality web development education maintained by an open source community.
## Live Preview
The [Gallery](https://haminimi.github.io/gallery/) built by [me](https://github.com/Haminimi).
## Main Features
- **Add and Delete:** Easily add and delete images in the gallery.
- **Navigation Bar:** Jump to any image in the gallery without the need to manually switch using the previous and next buttons.
- **Responsive Design:** The app provides a consistent user experience and a user-friendly interface across various screen sizes.

**To Do:**
- [] **Multiple Albums**
- [] **Drag and Reorder**
- [] **Take Image With Camera**
## Tech
**The project is built with:**
- HTML
- Vanilla JavaScript
- Vanilla CSS

**Tools**
- Git
- npm
- Webpack
- Visual Studio Code

**Linter and code formatter**
- ESLint
- Prettier
## Covered Topics
**This section mentions the main topics covered during project work and prior lessons**
- Linting / ESLint
- Formatting / Prettier
- Animations
- Modules
- Webpack
## Reflection
There is an interesting issue when running the app in Chrome. I can't add the same image more than once, however, in Firefox, everything works as it should. You are able to add the same image as many times as you want. At the moment I am not aware of the reason for this behavior.

I experimented a bit with the PubSub pattern. Images are updated after adding or deleting, the modules where the change is happening publish this change, and the main module subscribes to it, updating the images across all modules.

Currently, the app isn't actually a gallery, but rather an image carousel or just an album. However, in the future, I may revisit the project and upgrade it to a fully working gallery app with all basic functionalities.
## Credits
- Sticker used for the favicon image is one of the [Gallery icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/gallery).

**Images**
- Photo by [Marek Piwnicki](https://unsplash.com/@marekpiwnicki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-large-mountain-with-a-snow-covered-peak-3a6r6TEhU4A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).
- Photo by [Aleksandr Popov](https://unsplash.com/@5tep5?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-view-of-the-ocean-from-a-cliff-V3snakBbbfY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).
- Photo by [Marek Piwnicki](https://unsplash.com/@marekpiwnicki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-mountain-range-with-a-star-trail-in-the-sky-WXx-J0J4Lzo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).
- Photo by [Abhi Verma](https://unsplash.com/@abhiver?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-large-rock-sticking-out-of-the-ocean-next-to-a-beach-L9GRWQqN3oA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).
- Photo by [Matteo Piscioneri](https://unsplash.com/@matteo_skyrider?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/cLyo0L_EItY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).
## Author
- [GitHub](https://github.com/Haminimi)
- [Exercism](https://exercism.org/profiles/Haminimi)
- [LeetCode](https://leetcode.com/Haminimi/)
- Email: haminimi.dev@gmail.com
- LinkedIn: A profile will be available at the time I am job ready
## Happy coding!