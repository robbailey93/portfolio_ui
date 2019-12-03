import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SkillsAdmin from './SkillsAdmin';
import SkillsIndex from './SkillsIndex';

function SkillsDemoMod() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div>
				<Button variant='primary' onClick={handleShow}>
					Launch demo modal
				</Button>

				<Modal
					// {...props}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered
					show={show}
					onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Woohoo, you're reading this text in a modal!
						<SkillsAdmin></SkillsAdmin>
						<SkillsIndex></SkillsIndex>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='primary' onClick={handleClose}>
							Close
						</Button>
						{/* <Button variant='primary' onClick={handleClose}>
							Save Changes
						</Button> */}
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
}

export default SkillsDemoMod;
