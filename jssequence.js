var jsSequence= {
  JsSequence: function(min,max) {
    this.min=min;
    this.max=max;
    this.iter=0;
    // Swap in case of unordered limits
    if( this.max<this.min ) {
      var tmp=this.max;
      this.max=this.min;
      this.min=tmp;
    };

    // Create ordered sequence
    var ordSeq=[];
    for ( var i=0; i<this.max-this.min+1; ++i ) {
      ordSeq.push(this.min+i);
    }

    // Create disordered sequence
    this.seq=[];
    var last=ordSeq.length;
    while( last ) {
      var aleat=Math.floor( Math.random()*last );
      this.seq.push( ordSeq[aleat] );
      ordSeq[aleat]=ordSeq[--last];
    }
    this.get=function() {
      var toRet=null;
      if( this.iter<this.seq.length ) {
        toRet=this.seq[this.iter];
        this.iter=(this.iter+1)%this.seq.length;
      }
      return toRet;
    }
    this.test=function() {
      for ( var i=0; i<30; ++i ) {
        console.log( "#",i, this.get() );
      }
    }
  }
}
