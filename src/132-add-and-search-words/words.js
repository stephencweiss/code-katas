class ListNode {
    constructor(value = null, next = null) {
        this.value = value
        this.next = next
    }
}

class QueueList {
    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    deque() {
        if (!this.head) return null
        const val = this.head.value
        this.size--
        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }
        return val
    }
    enqueue(val) {
        const node = new ListNode(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
}

var WordDictionary = function() {
    this.trie = {}
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    // for each letter in the word
    let node = this.trie
    for (const letter of word) {
        // we look to see if that letter already exists in the trie
        // if it doesn't - we add a new node in the trie
        if (!node[letter]) node[letter] = {}
        // we move to the node in the trie for that letter
        node = node[letter]
    }
    // once we're out of letters - we have a special character to indeicate Termination
    node['*'] = {}
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const queue = new QueueList()
    // queue value = [index, letter, node], we start with the root which is the entire trie
    queue.enqueue([0, word[0], this.trie])
    const maxIndex = word.length - 1

    while (queue.size) {
        const [index, letter, node] = queue.deque()

        // base case - last letter in the word exists on the portion of the node
        // and it has a * as a key
        if (index === maxIndex && letter in node && '*' in node[letter]) {
            return true
        }
        if (letter === '.') {
            // enqueu _all_ of the node's keys at that depth that aren't terminators
            Object.keys(node).forEach(knownLetter => {
                if (knownLetter !== '*')
                    queue.enqueue([index, knownLetter, node])
            })
        } else if (letter in node) {
            queue.enqueue([index + 1, word[index + 1], node[letter]])
        }
    }

    return false
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary()
wordDictionary.addWord('bad')
wordDictionary.addWord('bathe')
wordDictionary.addWord('dad')
wordDictionary.addWord('mad')
console.log(wordDictionary.search('b.d'))
console.log(wordDictionary.search('b.e'))
