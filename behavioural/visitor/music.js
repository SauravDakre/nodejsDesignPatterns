class PlayListVisitor {
	visit(library){
        const notPlayed = []
        for(const song of library.songs){
            if(!song.played){
                notPlayed.push(song.name)
            }
        }
        return notPlayed
    }
}

class Song{
    constructor(name, played){
        this.name = name
        this.played = played
    }
}

class Library{
    constructor(){
        this.songs = []
    }
    addSong(song){
        this.songs.push(song)
    }

    accept(visitor){
        return visitor.visit(this)
    }
}

const l = new Library()
l.addSong(new Song('a', true))
l.addSong(new Song('b', false))
l.addSong(new Song('c', true))
l.addSong(new Song('d', true))
l.addSong(new Song('e', false))
const visitor = new PlayListVisitor()
console.log('not played songs:', l.accept(visitor))
