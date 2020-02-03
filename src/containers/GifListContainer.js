  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
