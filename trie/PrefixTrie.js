class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  EndsWith(word){
    for(let i=word.length-1;i>=0; i--){
      this.insertEndsWith(i,word)
    }
  }
  insertEndsWith(index,word) {
    let currentNode = this.root;

    for (let i = 0; i < index+1; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }

    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }

    return currentNode.isEndOfWord;
  }

//  startsWith(prefix){
//   let currNode=this.root
//   for(let i=0; i<prefix.length; i++){
//     const char=prefix[i]
//     if(!currNode.children[char]){
//       return false
//     }
//     currNode=currNode.children[char]
//   }
//   return true
//  }
   }


// Example usage:
const trie = new Trie();
trie.EndsWith("apple");
trie.EndsWith("banana");
trie.EndsWith("orange");

console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("orange")); // true
console.log(trie.search("grape")); // false
console.log('...................................');
console.log(trie.search("app")); // true
console.log(trie.search("ban")); // true
console.log(trie.search("ora")); // true
console.log(trie.search("oran")); // true
