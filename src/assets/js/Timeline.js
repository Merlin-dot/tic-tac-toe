import React from 'react';

// adding an item to the timeline
export function timeline_add(timeline, item) {
  return timeline.push(item);
}

// loading an item from the timeline
export function timeline_load(timeline, position) {
  return timeline[position];
}

// getting the user at a certain timeline position
export function timeline_get_user(squares) {
  let null_counter = squares.filter(determine_null).length;
  if (null_counter % 2 === 0 ) {
    return 'O';
  } else {
    return 'X';
  }
}
function determine_null(square){
  return square === null;
}



class Timeline extends React.Component {

  // displaying buttons for each restore point
  display_restore_points(){
    let restore_button = [];
    for (let counter = 0; counter < this.props.value.length; counter++) {
      restore_button.push(<button key={counter} onClick={() => this.props.handler(counter)}>{counter + 1}</button>);
    }
    return restore_button;
  }


  // displaying the timeline
  render() {
    return (
      <div className={"timeline_content"}>
        <h1 className={"timeline_headline"}>Timeline</h1>
        <div className={"timeline_container"}>
          {this.display_restore_points()}
        </div>
      </div>
    );
  }


  }
export default Timeline;