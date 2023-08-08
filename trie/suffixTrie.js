class TrieNode{
  constructor(){
    this.children={}
    this.isEndOfWord=false
  }
}
class SuffixTrie{
  constructor(){
    this.root=new TrieNode()
  }
  suffixTrie(word){
    for(let i=0; i<word.length; i++){
      this.insertSubstring(i,word)
    }
  }
  insertSubstring(index,word){
    let currentNode=this.root
    for(let i=index; i<word.length; i++){
      const char=word[i]
      if(!currentNode.children[char]){
        currentNode.children[char]=new TrieNode()
      }
      currentNode=currentNode.children[char]
    }
    currentNode.isEndOfWord=true
  }
  search(word){
    let currentNode=this.root
    for(let i=0; i<word.length;i++){
      const char=word[i]
      if(!currentNode.children[char]){
        return false
      }
      currentNode=currentNode.children[char]
    }
    return currentNode.isEndOfWord
  }
}
let t=new SuffixTrie()
t.suffixTrie('apple')
console.log(t.search('pple'));