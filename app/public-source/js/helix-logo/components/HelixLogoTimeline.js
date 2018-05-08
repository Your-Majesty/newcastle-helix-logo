class HelixLogoTimeline {
  
  constructor(args) {
    this.measureMaxValue = 24.0
    this.currentTimelineValue = 24.0
  }

  calculateTimeline() {
    this.totalValues = DataCollector.collection.length
    this.pointValue =  this.measureMaxValue / this.totalValues
    this.scale = this.totalValues / this.measureMaxValue
  }

  collectionIndex(value) {
    return Math.floor(this.totalValues - (this.currentTimelineValue * this.scale))
  }
}