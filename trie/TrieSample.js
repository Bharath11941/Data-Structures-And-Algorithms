class TrieNode{
  constructor(){
    this.children={}
    this.isEndOfWord=false
  }
}
class Trie{
  constructor(){
    this.root=new TrieNode()
  }
  insert(word){
    let currNode=this.root
    for(let i=0; i<word.length; i++){
      const char=word[i]
      if(!currNode.children[char]){
        currNode.children[char]=new TrieNode()
      }
      currNode=currNode.children[char]
    }
    currNode.isEndOfWord=true
  }
  search(word){
    let curr=this.root
    for(let i=0; i<word.length; i++){
      const char=word[i]
      if(!curr.children[char]){
        return false
      }
      curr=curr.children[char]
    }
    return curr.isEndOfWord
  }
}
let trie=new Trie()
trie.insert('Banana')
trie.insert('Apple')
trie.insert('Grapes')

console.log(trie.search('Banana'));
console.log(trie.search('Apple'));
console.log(trie.search('banana'));