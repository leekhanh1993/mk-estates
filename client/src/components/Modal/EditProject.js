import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editPRO } from '../../actions/proActions'

import {
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    ModalFooter,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    HelpBlock,
    Button
} from 'react-bootstrap'

class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                isValid: true,
                message: ''
            },
            owner: {
                value: '',
                isValid: true,
                message: ''
            },
            typePro: {
                value: '',
                isValid: true,
                message: ''
            },
            totalArea: {
                value: '',
                isValid: true,
                message: ''
            },
            startYear: {
                value: '',
                isValid: true,
                message: ''
            },
            endYear: {
                value: '',
                isValid: true,
                message: ''
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        var allProjects = nextProps.allProjects;
        var idProject = nextProps.idProject;
        if (idProject) {
            var editProject;
            for (let index = 0; index < allProjects.length; index++) {
                const project = allProjects[index];
                if (project._id === idProject) {
                    editProject = project
                }
            }
            //setState current project immediately
            var newState = {
                ...this.state,
                name: {
                    value: editProject.name,
                    isValid: true,
                    message: ''
                },
                owner: {
                    value: editProject.owner,
                    isValid: true,
                    message: ''
                },
                typePro: {
                    value: editProject.typePro,
                    isValid: true,
                    message: ''
                },
                totalArea: {
                    value: editProject.totalArea,
                    isValid: true,
                    message: ''
                },
                startYear: {
                    value: editProject.startYear,
                    isValid: true,
                    message: ''
                },
                endYear: {
                    value: editProject.endYear,
                    isValid: true,
                    message: ''
                }
            }
            this.setState(newState)
        }
    }
    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        var newState = {
            ...this.state,
            [name]: {
                ...this.state[name],
                value
            }
        }
        this.setState(newState)
    }

    clearForm() {
        var newState = {
            ...this.state,
            name: {
                value: '',
                isValid: true,
                message: ''
            },
            owner: {
                value: '',
                isValid: true,
                message: ''
            },
            typePro: {
                value: '',
                isValid: true,
                message: ''
            },
            totalArea: {
                value: '',
                isValid: true,
                message: ''
            },
            startYear: {
                value: '',
                isValid: true,
                message: ''
            },
            endYear: {
                value: '',
                isValid: true,
                message: ''
            }
        }
        this.setState(newState)
    }
    handleClose() {
        this.props.setCloseEditProject(false)
    }

    onSubmit() {
        var { name, owner, typePro, totalArea, startYear, endYear } = this.state;
        var allProjects = this.props.allProjects;

        // //Clear State
        var newState = {
            ...this.state,
            name: {
                value: this.state.name.value,
                isValid: true,
                message: ''
            },
            owner: {
                value: this.state.owner.value,
                isValid: true,
                message: ''
            },
            typePro: {
                value: this.state.typePro.value,
                isValid: true,
                message: ''
            },
            totalArea: {
                value: this.state.totalArea.value,
                isValid: true,
                message: ''
            },
            startYear: {
                value: this.state.startYear.value,
                isValid: true,
                message: ''
            },
            endYear: {
                value: this.state.endYear.value,
                isValid: true,
                message: ''
            }
        }
        this.setState(newState)

        //check user name is avalable or not
        var availablProjectName = [];
        for (let index = 0; index < allProjects.length; index++) {
            const project = allProjects[index];
            if (project._id === this.props.idProject) {
                continue
            } else {
                availablProjectName.push(project.name)
            }
        }

        //Validation for Project Name
        const checkProjectName = (newProjectName) => {
            var isAvailableProject = availablProjectName.includes(newProjectName) ? true : false
            if (newProjectName === '') {
                this.setState({
                    name: {
                        value: this.state.name.value,
                        isValid: false,
                        message: 'Project name can not be blanked!!!!'
                    }
                })
            } else if (isAvailableProject) {
                this.setState({
                    name: {
                        value: this.state.name.value,
                        isValid: false,
                        message: 'Your project name is avalable!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckProjectName = checkProjectName(name.value)

        //Validation for Owner
        const checkOwner = (newOwner) => {
            if (newOwner === '') {
                this.setState({
                    owner: {
                        value: this.state.owner.value,
                        isValid: false,
                        message: 'Owner can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckOwner = checkOwner(owner.value)

        //Validation for Type Project
        const checkTypeProject = (newTypeProject) => {
            if (newTypeProject === '') {
                this.setState({
                    typePro: {
                        value: this.state.typePro.value,
                        isValid: false,
                        message: 'Type project can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckTypeProject = checkTypeProject(typePro.value)

        //Validation for total area
        const checkTotalArea = (newTotalArea) => {
            if (newTotalArea === '') {
                this.setState({
                    totalArea: {
                        value: this.state.totalArea.value,
                        isValid: false,
                        message: 'Total area can not be blanked!!!!'
                    }
                })
            } else if (Number(newTotalArea) <= 0) {
                this.setState({
                    totalArea: {
                        value: this.state.totalArea.value,
                        isValid: false,
                        message: 'Total area can not be a negative number or zero !!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckTotalArea = checkTotalArea(totalArea.value)

        //Validation for start year
        const checkStartYear = (newStartYear) => {
            if (newStartYear === '') {
                this.setState({
                    startYear: {
                        value: this.state.startYear.value,
                        isValid: false,
                        message: 'Start year can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckStartYear = checkStartYear(startYear.value)

        //Validation for end year
        const checkEndYear = (newEndYear) => {
            if (newEndYear === '') {
                this.setState({
                    endYear: {
                        value: this.state.endYear.value,
                        isValid: false,
                        message: 'End year can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckEndYear = checkEndYear(endYear.value)

        if (resultCheckProjectName
            && resultCheckOwner
            && resultCheckTypeProject
            && resultCheckTotalArea
            && resultCheckStartYear
            && resultCheckEndYear
        ) {
            var update = {
                name: this.state.name.value,
                owner: this.state.owner.value,
                typePro: this.state.typePro.value,
                totalArea: this.state.totalArea.value,
                startYear: this.state.startYear.value,
                endYear: this.state.endYear.value,
            }
            this.props.editPRO(update, this.props.idProject)
            alert("Edit Project Successful!!!")
            this.props.setCloseEditProject(false)
        }
    }
    render() {
        return (
            <Modal
                backdrop='static'
                show={this.props.showEditProject}
                onHide={this.handleClose.bind(this)}
            >
                <ModalHeader>
                    <ModalTitle bsClass="text-center">
                        Edit Project
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form horizontal>
                        {/* Name */}
                        <FormGroup
                            id="name"
                            validationState={this.state.name.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Name</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.name.value}
                                    name="name"
                                    placeholder='Name'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.name.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.name.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* owner */}
                        <FormGroup
                            id="owner"
                            validationState={this.state.owner.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Owner</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.owner.value}
                                    name="owner"
                                    placeholder='Owner'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.owner.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.owner.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* Type Project*/}
                        <FormGroup
                            id="typePro"
                            validationState={this.state.typePro.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Type Project</Col>
                            <Col sm={5}>
                                <FormControl
                                    componentClass='select'
                                    value={this.state.typePro.value}
                                    name="typePro"
                                    placeholder='select'
                                    onChange={this.onChange.bind(this)}
                                >
                                    <option value="House">House</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Land">Land</option>
                                </FormControl>
                                <FormControl.Feedback />
                                {this.state.typePro.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.typePro.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* totalArea*/}
                        <FormGroup
                            id="totalArea"
                            validationState={this.state.totalArea.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Total Area</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="number"
                                    value={this.state.totalArea.value}
                                    name="totalArea"
                                    placeholder='Total Area'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.totalArea.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.totalArea.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* startYear*/}
                        <FormGroup
                            id="startYear"
                            validationState={this.state.startYear.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Start Year</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="date"
                                    value={this.state.startYear.value}
                                    name="startYear"
                                    placeholder='Start Year'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.startYear.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.startYear.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* endYear*/}
                        <FormGroup
                            id="endYear"
                            validationState={this.state.endYear.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>End Year</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="date"
                                    value={this.state.endYear.value}
                                    name="endYear"
                                    placeholder='End Year'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.endYear.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.endYear.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <div className="text-center">
                        <Button
                            bsStyle="success"
                            onClick={this.onSubmit.bind(this)}
                        >Update</Button>
                        <Button
                            bsStyle="danger"
                            onClick={this.handleClose.bind(this)}
                        >Close</Button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, { editPRO })(EditProject);