import React from "react";
import "../../pages/styles/dashboard/dashboard.css";




const Modal = (props) => (
    <div class="modal" id = "Modal1" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document" id = "documentModal">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{props.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick = {props.closeClick}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{props.body}</p>
      </div>
      <div class="modal-footer">
        
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick = {props.closeClick}>Close</button>
      </div>
    </div>
  </div>
</div>

)
export default Modal;