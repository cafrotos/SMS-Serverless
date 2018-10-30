const regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

class Shortenlink {
  static getLink(contents) {
    let url = regex.exec(contents);
    return url;
  }

  static replaceLink(contents, url) {
    let newContents = contents.replace(regex, url)
    return newContents;
  }
}

module.exports = Shortenlink;